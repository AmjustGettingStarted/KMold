"use client";

import React from "react";
import { Button, Form, Input, Select } from "antd";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

interface FormProps {
  data: {
    title: string;
    dropDownName: string;
    buttonName: string;
  };
}
const InpForm: React.FC<FormProps> = ({ data }) => {
  const [form] = Form.useForm();

  const onFinish = (values: unknown) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col items-center w-full h-auto px-5 py-6">
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        className="h-full "
      >
        <h1 className="font-bold text-base py-2 h-full">{data.title}</h1>
        <p className="text-xs text-gray-500 py-2 leading-tight tracking-tight">
          Kindly fill your details to get Maruti Suzuki car on-road price from
          our sales expert.
        </p>
        <div className="flex flex-col space-y-6 py-2 ">
          <div>
            <Input
              placeholder="Enter your name"
              className="capitalize w-full text-black placeholder:text-black "
            />
          </div>
          <div>
            <Input
              placeholder="Enter your phone number"
              className="capitalize text-black "
            />
          </div>
          <div>
            <Select
              value={data.dropDownName}
              allowClear
              className="capitalize w-full text-black"
            >
              <Option value="male">option1</Option>
              <Option value="female">option2</Option>
              <Option value="other">...</Option>
            </Select>
          </div>
        </div>
        <div className="pt-4">
          <Button type="primary" htmlType="submit" className="w-[95%] ">
            {data.buttonName}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default InpForm;
