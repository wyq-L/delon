import { Observable } from 'rxjs';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import type { SFUISchemaItem } from '../../schema/ui';

export interface SFStringWidgetSchema extends SFUISchemaItem {
  /**
   * 指定 `input` 的 `type` 值，默认为：`text`
   */
  type?: string;

  /**
   * 文字框中显示提示信息
   */
  placeholder?: string;

  /**
   * 自动完成功能的表单
   */
  autocomplete?: 'on' | 'off';

  /**
   * 加载时是否获得焦点
   */
  autofocus?: boolean;

  /**
   * 前置标签，等同 `nzAddOnBefore`
   */
  addOnBefore?: string;

  /**
   * 后置标签，等同 `nzAddOnAfter`
   */
  addOnAfter?: string;

  /**
   * 前置Icon，等同 `nzAddOnBeforeIcon`
   */
  addOnBeforeIcon?: string;

  /**
   * 后置Icon，等同 `nzAddOnAfterIcon`
   */
  addOnAfterIcon?: string;

  /**
   * 带有前缀图标的 input，等同 `nzPrefix`
   */
  prefix?: string;

  /**
   * 前缀图标，等同 `nzPrefixIcon`
   */
  prefixIcon?: string;

  /**
   * 带有后缀图标的 input，等同 `nzSuffix`
   */
  suffix?: string;

  /**
   * 后缀图标，等同 `nzSuffixIcon`
   */
  suffixIcon?: string;

  /**
   * Whether hide border, Default: `false`
   */
  borderless?: boolean;

  /**
   * `change` event throttling and sequence control threshold
   *
   * `change` 事件节流与顺序控制的阀值
   */
  changeDebounceTime?: number;

  /**
   * Convert data, equivalent to `switchMap` operation
   *
   * 转换数据，相当于 `switchMap` 操作
   */
  changeMap?: (val: string) => Observable<NzSafeAny>;

  /**
   * 内容变更事件
   */
  change?: (val: NzSafeAny) => void;

  /**
   * 焦点事件
   */
  focus?: (e: FocusEvent) => void;

  /**
   * 失焦事件
   */
  blur?: (e: FocusEvent) => void;

  /**
   * 回车事件
   */
  enter?: (e: Event) => void;
}
