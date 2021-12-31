# Lilith

## 核心

### 类型检查器

#### 方法

* `isForm`判断对象是否为`Form`对象
* `isField`判断对象是否为`Field`对象
* `isVoidField`判断对象是否为`VoidField`对象
* `isGatherField`判断对象是否为`Field / VoidField`对象
* `isDataField`判断对象是否为`Field`数据对象
* `isQuery`判断对象是否为`Query`对象
* `isReflex`判断对象是否为`Reflex`对象

### 路径系统

#### 属性

* `length`数据操作路径合法长度
* `entire`路径完整字符串，与入参保持数据一致
* `section`完整的路径分割片段
* `tree`解析后的`AST树`

#### 方法

* `toString`输出路径的完整字符串
* `toArray`输出路径的完整分割片段
* `concat`连接多个路径信息，返回完整拼接的路径
* `parent`根据当前提供路径获取父级路径地址
* `existIn`基于当前丼判断指定数据是否存在
* `getIn`基于当前路径获取指定数据
* `setIn`基于当前路径更新指定数据
* `deleteIn`基于当前路径删除指定数据
* `ensureIn`确保某个路径下一定存在数据，如果没有则会创建数据

#### 静态方法

* `parse`解析路径地址
* `getIn`基于路径获取数据
* `setIn`基于路径更新数据
* `deleteIn`基于路径删除数据
* `exisIn`基于路径判断是否存在数据
* `ensureIn`确保某个路径下一定存在数据，如果没有则会创建数据

### 模型

#### 基础字段

##### 属性

* `form`表单上下文
* `parent`父亲
* `address`节点路径
* `path`数据路径
* `level`层级
* `initialized`是否已初始化
* `mounted`是否已挂载
* `unmounted`是否已卸载
* `display`展示状态描述
* `interact`交互状态描述
* `vissable`是否显示
* `hidden`是否隐藏
* `modify`是否可编辑
* `preview`是否可预览
* `disable`是否被禁用
* `loading`是否加载中
* `required`是否必填
* `active`是否处于激活状态`( 触发 onFocus 时为 true,触发 onBlur 时为 false )`
* `visited`是否被激活过`( 为 false 时,触发过一次 onFocus 之后永远为 true )`
* `content`内容填充
* `data`扩展属性
* `componentType`应用组件
* `componentProps`应用组件属性
* `vesselType`应用容器
* `vesselProps`应用容器属性

##### 方法

* `onInit`触发初始化状态
* `onMount`触发挂载状态
* `onUnmount`触发卸载状态
* `onFocus`触发聚焦状态
* `onBlur`触发失焦状态
* `setDisplay`设置展示状态描述
* `setInteract`设置交互状态描述
* `setLoading`设置加载中状态
* `setRequired`设置必填状态
* `setContent`设置内容填充
* `setData`设置扩展属性
* `setComponent`设置应用组件和属性
* `setComponentProps`设置应用组件属性
* `setVessel`设置应用容器和属性
* `setVesselProps`设置应用容器属性

#### 数据字段

##### 属性

* `name`数据键名
* `value`数据值
* `defaultValue`数据默认值
* `inputValue`输入数据值
* `dataSource`数据来源
* `title`标题
* `explain`说明
* `tips`提示
* `prefix`前缀
* `suffix`后缀
* `beforePrefix`前缀之前
* `afterSuffix`后缀之后

##### 方法

* `setValue`设置数据值
* `setDefaultValue`设置数据默认值
* `setDataSource`设置数据来源
* `setTitle`设置标题
* `setExplain`设置说明
* `setTips`设置提示
* `setPrefix`设置前缀
* `setSuffix`设置后缀
* `setBeforePrefix`设置前缀之前
* `setAfterSuffix`设置后缀之后

#### 虚拟字段

##### 属性（继承基础字段属性）

##### 方法（继承基础字段方法）

#### 表单

##### 属性

* `initialized`是否已初始化
* `mounted`是否已挂载
* `unmounted`是否已卸载
* `display`展示状态描述
* `interact`交互状态描述
* `vissable`是否显示
* `hidden`是否隐藏
* `modify`是否可编辑
* `preview`是否可预览
* `disable`是否被禁用
* `loading`是否加载中

##### 方法

* `createField`创建一个`Field`实例，如果提供路径地址相同则会重复使用该实例
* `createVoidField`创建一个`VoidField`实例，如果提供路径地址相同则会重复使用该实例
* `onInit`触发初始化状态
* `onMount`触发挂载状态
* `onUnmount`触发卸载状态
* `setDisplay`设置展示状态描述
* `setInteract`设置交互状态描述
* `setLoading`设置加载中状态

#### 数据

#### 结构

#### 节点

