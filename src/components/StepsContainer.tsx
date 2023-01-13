import React from "react";
import { Steps } from "antd";

function StepsContainer() {
  return (
    <div>
      <Steps
        direction="vertical"
        size="default"
        current={2}
        items={[
          { title: "About your organization",  },
          {
            title: "Choose your plan",
            
          },
          {
            title: "Connect Gateway",
            
          },
          {
            title: "Create your first product and price",
            
          },
          {
            title: "Share it to start selling",
            
          }
        ]}
      />
    </div>
  );
}

export default StepsContainer;
