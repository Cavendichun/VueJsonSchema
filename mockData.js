export const schema = {
    "type": "object",
    "title": "测试表单",
    "properties": {
        "base_info": {
            "type": "object",
            "title": "基础信息",
            "required": ["name"],
            "properties": {
                "name": {
                    "type": "string",
                    "title": "姓名",
                    "default": "Cavendichun"
                },
                "age": {
                    "type": "number",
                    "title": "年龄",
                    // "default": 2
                },
                "nb": {
                    "type": "boolean",
                    "title": "是吗",
                    "default": false
                }
            }
        },
        "test_array": {
            "type": "array",
            "title": "测试array",
            "minItems": 2,
            "maxItems": 4,
            // "moveable": false,
            "items": {
                "type": "object",
                "required": ["a"],
                "properties": {
                    "a": {
                        "type": "string",
                        "title": "a",
                        "default": "111"
                    },
                    "b": {
                        "type": "string",
                        "title": "b"
                    }
                }
            }
        }
    }
}

export const formData = {}

// export const schema = {
//     "type": "object",
//     "title": "企业信息",
//     "required": ["invitationCode"],
//     "properties": {
//         "invitationCode": {
//             "type": "number",
//             "title": "我的邀请码"
//         },
//         "businessLicenseInfo": {
//             "type": "object",
//             "title": "企业基本信息",
//             "properties": {
//                 "name": {
//                     "type": "string",
//                     "title": "企业名称"
//                 },
//                 "registeredAddress": {
//                     "type": "string",
//                     "title": "注册地址"
//                 },
//                 "enterpriseMail": {
//                     "type": "string",
//                     "title": "企业邮箱"
//                 },
//                 "socialCreditCode": {
//                     "type": "string",
//                     "title": "统一社会信用代码"
//                 },
//                 "businessLicenceDueDateType": {
//                     "type": "string",
//                     "title": "营业执照到期日"
//                 },
//                 "businessLicenceDueDate": {
//                     "type": "string",
//                     "title": "营业执照到期日"
//                 },
//                 "businessLicencePic": {
//                     "type": "string",
//                     "title": "营业执照照片"
//                 },
//                 "userId": {
//                     "type": "string",
//                     "title": "用户"
//                 }
//             }
//         },
//         "legalPersonInfo": {
//             "type": "object",
//             "title": "法定代表人信息",
//             "properties": {
//                 "legalPersonName": {
//                     "type": "string",
//                     "title": "姓名"
//                 },
//                 "legalPersonCertificateType": {
//                     "type": "string",
//                     "title": "证件类型"
//                 },
//                 "legalPersonIdNumber": {
//                     "type": "string",
//                     "title": "证件号码"
//                 },
//                 "legalPersonIdPic1": {
//                     "type": "string",
//                     "title": "证件正反面"
//                 }
//             },
//         },
//         "bankAccountInfo": {
//             "type": "object",
//             "title": "银行账户信息",
//             "properties": {
//                 "accountName": {
//                     "type": "string",
//                     "title": "开户名称"
//                 },
//                 "accountCardNumber": {
//                     "type": "string",
//                     "title": "银行卡号"
//                 },
//                 "accountOpenBank": {
//                     "type": "string",
//                     "title": "开户行"
//                 },
//                 "accountBankBranch": {
//                     "type": "string",
//                     "title": "分支行"
//                 },
//                 "accountBankUuid": {
//                     "type": "string",
//                     "title": "支行联行号"
//                 },
//                 "accountCertificatePic": {
//                     "type": "string",
//                     "title": "银行账户信息证明文件"
//                 }
//             }
//         },
//         "basicDepositAccountInfo": {
//             "type": "object",
//             "title": "基本存款账户信息",
//             "properties": {
//                 "accountPermitsPic": {
//                     "type": "string",
//                     "title": "基本存款账户开户许可证"
//                 }
//             }
//         },
//         "changeStatus": {
//             "type": "string",
//             "title": "认证状态"
//         }
//     }
// }

// export const formData = {
//     "invitationCode": "11111",
//     "businessLicenseInfo": {
//         "name": "奥特曼有限公司"
//     }
// }
