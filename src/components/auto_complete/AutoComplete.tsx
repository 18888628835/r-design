import React, {
  ChangeEvent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { Wrap } from "./_styleAutoComplete";
import Icon from "../icon/Icon";
import Input, { InputProps } from "../input/Input";
import classnames from "classnames";
import "animate.css";
import Loading from "../loading/Loading";

// 需要筛选的数据item 项目必须包含 value 属性
interface DataSourceObj {
  value: string;
}
// 泛型，包含 value:string 属性的对象，其他属性不限
export type DataSourceType<T = {}> = T & DataSourceObj;

// 基础 props
type BaseAutoCompleteProps = {
  onSelect?: (e?: any) => void;
  filterOption: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
  empty?: boolean;
  renderOption?: (value: string) => ReactElement;
};
//  基础 props 加 inputProps，本组件需要支持 Input组件 的属性
export type AutoCompleteProps = BaseAutoCompleteProps & InputProps;

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const {
    onSelect,
    value,
    empty,
    filterOption,
    renderOption,
    ...restProps
  } = props;

  // 受控组件的 value
  const [inputValue, setInputValue] = useState("");
  // 输入框输入内容，发请求并获取数据后渲染下拉内容的状态
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  // 设置 loading 的状态
  const [loading, setLoading] = useState(false);
  // 防抖下的定时器 id
  let timer: any = useRef();
  // 获取输入框 input 的 ref
  const input: any = useRef(null);
  // 引进 animate 的动画效果
  const classes = classnames("auto-complete-list", "animate__animated", {
    animate__fadeInDown: loading === false,
  });
  // 防抖函数
  const debounceHandle = () => {
    return () => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        // 需要受控组件的 value 存在并且当前被选中的元素是输入框 input才可以发 ajax 请求
        if (inputValue && document.activeElement === input.current) {
          // 获取用户传递来的filterOption的结果
          const result = filterOption(inputValue);
          //如果是 promise 说明传递进来的是异步获取数据的结果
          if (result instanceof Promise) {
            setLoading(true);
            result.then((data) => {
              const filterData = data.slice(0, 5);
              setSuggestions(filterData);
              setLoading(false);
            });
          } else {
            setSuggestions(result);
          }
        }
        clearTimeout(timer.current);
      }, 500);
    };
  };
  // 给 document 绑定一个事件，当点击的位置不是 input 时，就把下拉的内容给清理掉
  const clickOutside = (e: MouseEvent) => {
    if (e.target !== input.current) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickOutside);
    return () => {
      //记得清理绑定的事件
      document.removeEventListener("click", clickOutside);
    };
  }, []);
  /*   由于 change 事件会每次都发请求，这样请求量太大，需要一个防抖函数。
  基本思路就是当 input 的 value 改变后，利用 useEffect 的函数会触发
  的机制，在 useEffect 内设置一个防抖函数，限制发请求次数。但是由于每次
  组件刷新都会生成新的 timer，所以利用 ref 来设置一个恒定的 timer */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(debounceHandle(), [inputValue]);
  // onChange 改变事件
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
  };
  return (
    <Wrap>
      <Input
        value={inputValue}
        onChange={handleChange}
        {...restProps}
        ref={input}
      />
      {inputValue && empty && (
        <div
          className="empty-icon"
          onClick={() => {
            setInputValue("");
            setSuggestions([]);
          }}
        >
          <Icon path="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </div>
      )}
      {loading && <Loading flag={loading} title="加载中" />}
      <div className="auto-complete-listWrap">
        {suggestions.map((item, index) => {
          return (
            <div
              className={classes}
              key={index + item.value}
              onClick={() => {
                setInputValue(item.value);
                setSuggestions([]);
                if (onSelect) {
                  onSelect();
                }
              }}
            >
              {renderOption ? renderOption(item.value) : item.value}
            </div>
          );
        })}
      </div>
    </Wrap>
  );
};

export default AutoComplete;
