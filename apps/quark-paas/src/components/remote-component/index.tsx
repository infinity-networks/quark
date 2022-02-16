import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const RemoteComponent = (props: any) => {
  const { type } = props;

  const [Component, setComponent] = useState<React.FC | null>(null);

  const importComponent = useCallback(() => {
    return axios
      .get(`http://127.0.0.1:8888/${type}.js`)
      .then((res) => res.data);
  }, [type]);

  const loadComponent = useCallback(async () => {
    // new Function(`${await importComponent()}`)();
    window.eval(`${await importComponent()}`);
    const { default: component } = (window as any).ComlibH5Normal;
    setComponent(() => component); // 这里需要注意，不能用setComponent(component)，因为compoennt是一个函数，而setComponent接受两种形式的参数，一种是字面量，一种是函数，函数会被执行
  }, [importComponent, setComponent]);

  useEffect(() => {
    loadComponent();
  }, [loadComponent]);

  if (Component) {
    return <Component {...props} />;
  }
  return null;
};

export default RemoteComponent;
