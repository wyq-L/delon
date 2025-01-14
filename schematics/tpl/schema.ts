import { Schema as ComponentSchema } from '@schematics/angular/component/schema';

export interface Schema extends ComponentSchema {
  // [key: string]: any;

  /**
   * 指定模板名称 (Specifies template name)
   */
  tplName?: string;
  /**
   * 指定目标路径，支持 `bus/list` 写法 (Specifies relative path, could be set like `bus/list`.)
   */
  target?: string;
  /**
   * 指定组件名不加前缀 (Without prefix to selectors)
   */
  withoutPrefix?: boolean;
  /**
   * 指定是否使用模态框 (Specifies using modal mode)
   */
  modal?: boolean;

  _tplDir: string;
  _filesPath: string;
  extraArgs: Record<string, unknown>;
}
