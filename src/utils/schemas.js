import * as Yup from "yup";

export const passwordSchema = Yup.string()
  .trim()
  .required("密碼不可為空")
  .matches(
    /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
    "密碼必須是 8個字符 的英數混合並且包含一個特殊字元"
  );
