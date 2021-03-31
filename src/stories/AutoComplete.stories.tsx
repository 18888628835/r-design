import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import AutoComplete from "../components/auto_complete/AutoComplete";
import { AutoCompleteProps } from "../components/auto_complete/AutoComplete";
import styled from "styled-components";

export default {
  title: "Example/AutoComplete",
  component: AutoComplete,
} as Meta;

const Wrap = styled.div`
  height: 300px;
`;
const auto_complete: Story<AutoCompleteProps> = (args) => {
  const data = [
    { value: "jamas" },
    { value: "tom" },
    { value: "hello" },
    { value: "word" },
    { value: "some words" },
  ];
  const handler = (inputValue: string) => {
    return data.filter((item, index) => {
      return item.value.includes(inputValue);
    });
  };
  return (
    <Wrap>
      <AutoComplete filterOption={handler} placeholder="try type o" />
    </Wrap>
  );
};

export const autoComplete = auto_complete.bind({});
autoComplete.storyName = "回调函数获取暴露的value值";

const auto_complete_select: Story<AutoCompleteProps> = (args) => {
  const data = [
    { value: "jamas" },
    { value: "tom" },
    { value: "hello" },
    { value: "word" },
    { value: "some words" },
  ];
  const handler = (inputValue: string) => {
    return data.filter((item, index) => {
      return item.value.includes(inputValue);
    });
  };
  return (
    <Wrap>
      <AutoComplete filterOption={handler} placeholder=" try type o" empty />
    </Wrap>
  );
};

export const autoCompleteSelect = auto_complete_select.bind({});
autoCompleteSelect.storyName = "Empty属性清空value值";

const auto_renderOption: Story<AutoCompleteProps> = (args) => {
  const data = [
    { value: "jamas" },
    { value: "tom" },
    { value: "hello" },
    { value: "word" },
    { value: "some words" },
  ];
  const handler = (inputValue: string) => {
    return data.filter((item, index) => {
      return item.value.includes(inputValue);
    });
  };
  return (
    <Wrap>
      <AutoComplete
        filterOption={handler}
        placeholder=" try type o"
        empty
        renderOption={(value) => (
          <>
            <div>自定义内容</div>
            <div>{value}</div>
          </>
        )}
      />
    </Wrap>
  );
};

export const autoRenderOption = auto_renderOption.bind({});
autoRenderOption.storyName = "下拉内容可自定义";

const auto_fetch: Story<AutoCompleteProps> = (args) => {
  const fetchHandler = (query: string) => {
    return fetch(`http://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        return data.items.map((item: any) => {
          return { value: item.login };
        });
      });
  };
  const handler = (inputValue: string) => {
    return fetchHandler(inputValue).then((data) => {
      return data.filter((i: any) => {
        return i.value.includes(inputValue);
      });
    });
  };
  return (
    <Wrap>
      <AutoComplete
        filterOption={handler}
        placeholder=" try type o or oo or ooo"
        empty
      />
    </Wrap>
  );
};

export const autoFetch = auto_fetch.bind({});
autoFetch.storyName = "异步请求和防抖";
