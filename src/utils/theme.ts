// 调整深度合并函数
export function deepThemeMerge(
  defaultObj: App.Theme.ThemeSetting | App.Theme.ThemeSettingPartial,
  userObj: App.Theme.ThemeSettingPartial,
): App.Theme.ThemeSetting {
  // 创建结果对象（避免修改原对象）, 使用 any 来忽略类型检查，因为实在是想不出来了
  const result: any = { ...defaultObj };

  // 遍历用户提供的配置，明确key的类型
  const keys = Object.keys(userObj) as Array<keyof App.Theme.ThemeSettingPartial>;
  for (const key of keys) {
    const userVal = userObj[key];
    if (userVal === undefined) continue;

    const defaultVal = defaultObj[key as keyof App.Theme.ThemeSetting];

    // 检查是否为需要递归合并的对象（非数组、非null的对象）
    const isMergeableObject = (val: unknown): val is object =>
      val !== null && typeof val === 'object' && !Array.isArray(val);

    if (isMergeableObject(userVal) && isMergeableObject(defaultVal)) {
      // 递归合并嵌套对象
      result[key] = deepThemeMerge(
        defaultVal as App.Theme.ThemeSetting,
        userVal as App.Theme.ThemeSettingPartial,
      );
    } else {
      // 基本类型、数组或其他类型，直接覆盖
      result[key] = userVal;
    }
  }

  return result as App.Theme.ThemeSetting;
}
