import { Button, Form, Input } from 'antd';

const FormComponent = () => (
  <Form name="basic">
    <Form.Item label="Code" name="code">
      <Input />
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default FormComponent;
