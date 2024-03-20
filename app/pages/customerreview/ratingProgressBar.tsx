import React from "react";
import { Flex, Progress } from "antd";

const RatingProgressBar: React.FC = () => (
  <Flex gap="small" vertical>
    <Progress percent={60} />
  </Flex>
);

export default RatingProgressBar;
