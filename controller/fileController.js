const dataSchema = require("../models/dataSchema")

let creatUser = (FirstName, LastName, UserName, Pass, Email, DoB, Phone, Address) => {
    let newUser = {
        userFirstName: FirstName,
        userLastName: LastName,
        userUserName: UserName,
        userPass: Pass,
        userEmail: Email,
        userPhone: Phone,
        userDoB: DoB,
        userAddress: Address

    }
    dataSchema.userInfo.create(newUser)
}

let createTracNghiem = (questionContent, AnswerValue, AnswerAContent, AnswerBContent, AnswerCContent, AnswerDContent) => {
    let newTracNghiem = {
        tnQuestionContent: questionContent,
        tnAnswer: {
            tnAnswerValue: AnswerValue,
            AnswerAContent: AnswerAContent,
            AnswerBContent: AnswerBContent,
            AnswerCContent: AnswerCContent,
            AnswerDContent: AnswerDContent

        }
    }
    dataSchema.tracnghiem.create(newTracNghiem)
}

let createDienTu = (questionContent, AnswerValue, AnswerAContent, AnswerBContent, AnswerCContent, AnswerDContent) => {
    let newDienTu = {
        dtQuestionContent: questionContent,
        dtAnswer: {
            dtAnswerValue: AnswerValue,
            AnswerAContent: AnswerAContent,
            AnswerBContent: AnswerBContent,
            AnswerCContent: AnswerCContent,
            AnswerDContent: AnswerDContent

        }
    }
    dataSchema.dientu.create(newDienTu)
}
let createBaiDoc = (
    bdParagraph, Q1QuestionContent, Q1AnswerValue, Q1AnswerAContent, Q1AnswerBContent, Q1AnswerCContent, Q1AnswerDContent,
    Q2QuestionContent, Q2AnswerValue, Q2AnswerAContent, Q2AnswerBContent, Q2AnswerCContent, Q2AnswerDContent,
    Q3QuestionContent, Q3AnswerValue, Q3AnswerAContent, Q3AnswerBContent, Q3AnswerCContent, Q3AnswerDContent,
    Q4QuestionContent, Q4AnswerValue, Q4AnswerAContent, Q4AnswerBContent, Q4AnswerCContent, Q4AnswerDContent,
    Q5QuestionContent, Q5AnswerValue, Q5AnswerAContent, Q5AnswerBContent, Q5AnswerCContent, Q5AnswerDContent
) => {
    let newBaiDoc = {
        bdParagraph: bdParagraph,
        bdQuestion: {
            Question1: {
                Q1QuestionContent: Q1QuestionContent,
                Q1AnswerValue: Q1AnswerValue,
                Q1AnswerAContent: Q1AnswerAContent,
                Q1AnswerBContent: Q1AnswerBContent,
                Q1AnswerCContent: Q1AnswerCContent,
                Q1AnswerDContent: Q1AnswerDContent
            },
            Question2: {
                Q2QuestionContent: Q2QuestionContent,
                Q2AnswerValue: Q2AnswerValue,
                Q2AnswerAContent: Q2AnswerAContent,
                Q2AnswerBContent: Q2AnswerBContent,
                Q2AnswerCContent: Q2AnswerCContent,
                Q2AnswerDContent: Q2AnswerDContent
            },
            Question3: {
                Q3QuestionContent: Q3QuestionContent,
                Q3AnswerValue: Q3AnswerValue,
                Q3AnswerAContent: Q3AnswerAContent,
                Q3AnswerBContent: Q3AnswerBContent,
                Q3AnswerCContent: Q3AnswerCContent,
                Q3AnswerDContent: Q3AnswerDContent
            },
            Question4: {
                Q4QuestionContent: Q4QuestionContent,
                Q4AnswerValue: Q4AnswerValue,
                Q4AnswerAContent: Q4AnswerAContent,
                Q4AnswerBContent: Q4AnswerBContent,
                Q4AnswerCContent: Q4AnswerCContent,
                Q4AnswerDContent: Q4AnswerDContent
            },
            Question5: {
                Q5QuestionContent: Q5QuestionContent,
                Q5AnswerValue: Q5AnswerValue,
                Q5AnswerAContent: Q5AnswerAContent,
                Q5AnswerBContent: Q5AnswerBContent,
                Q5AnswerCContent: Q5AnswerCContent,
                Q5AnswerDContent: Q5AnswerDContent
            }
        }
    }
    dataSchema.baidoc.create(newBaiDoc)
}

module.exports = {
    creatUser,
    createTracNghiem,
    createDienTu,
    createBaiDoc
}