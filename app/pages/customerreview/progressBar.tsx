import React from "react";
import { Flex, Progress } from "antd";

const ProgressBar: React.FC = () => (
  <Flex gap="small" wrap="wrap">
    <div>
      <Progress type="circle" percent={75} />
    </div>
  </Flex>
);

export default ProgressBar;
