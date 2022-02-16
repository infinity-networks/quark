interface Env {
  /** 编辑态时有值 */
  edit?: any;

  /** 调试态、运行态有值  */
  runtime?: any;

  [x: string]: any;
}

type Inputs = Record<string, Function>;

type Outputs = Record<string, Function>;

interface Slot {
  /** 插槽内子组件数量，为0时当前插槽为空 */
  size: number;

  /** 插槽内子组件渲染函数 */
  render: (...args: any[]) => JSX.Element;

  /** 清空插槽 */
  clear: () => void;

  /** 添加子组件 */
  addCom: (namespace: string) => void;
}

interface RuntimeParams<Props = any> {
  /** 环境注入 */
  env: Env;

  /** 组件的配置数据 */
  props: Props;

  /** 组件的输入 */
  inputs: Inputs;

  /** 组件的输出 */
  outpus: Outputs;

  /** 插槽 */
  slots: Record<string, Slot>;
}
