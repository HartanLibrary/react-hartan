import formStyle from "./Form.module.css"
import { useState } from "react"
import PropTypes from "prop-types"

const fieldsData = {
    inputTag: [
        {
            inputType: "text",
            inputId: "name",
            inputName: "name",
            inputLabel: "Name",
            required: true
        },
        {
            inputType: "email",
            inputId: "email",
            inputName: "email",
            inputLabel: "Email",
            required: true
        },
        {
            inputType: "number",
            inputId: "phoneNo",
            inputName: "phoneNo",
            inputLabel: "Contact Number",
            required: true
        }
    ],
    textareaTag: [
        {
            textareaId: "message",
            textareaName: "message",
            textareaLabel: "Message",
            required: true
        }
    ]
};


export default function SimpleForm({ fields = fieldsData, action = "", method = "POST", formTitle = "Leave a Comment", userFormCardStyle, userTitleStyle, userFormStyle, userInputFieldStyle }) {

    const [data, setData] = useState({});
    const updateData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };

    return (
        <div className={`${formStyle.formCard} ${userFormCardStyle}`}>
            <span className={`${formStyle.title} ${userTitleStyle}`}>{formTitle}</span>

            <form className={`${formStyle.form} ${userFormStyle}`} action={action} method={method} target="_blank">

                {
                    fields.inputTag.map((field, id) => {
                        return (
                            <div className={`${formStyle.group} ${userInputFieldStyle}`} key={id}>
                                <input placeholder="" type={field.inputType} name={field.inputName} id={field.inputId} required={field.required === true} onChange={updateData} />
                                <label htmlFor={field.inputId}>{field.inputLabel}</label>
                            </div>
                        )
                    })
                }

                {
                    fields.textareaTag.map((textarea, id) => {
                        return (
                            <div className={`${formStyle.group} ${userInputFieldStyle}`} key={id}>
                                <textarea placeholder="" id={textarea.textareaId} name={textarea.textareaName} required={textarea.required === true} onChange={updateData}></textarea>
                                <label htmlFor={textarea.textareaId}>{textarea.textareaLabel}</label>
                            </div>
                        )
                    })
                }

                <button type="submit" id="btn">Submit</button>
            </form>
        </div>
    )
}

SimpleForm.propTypes = {
    fields: PropTypes.shape({
        inputTag: PropTypes.arrayOf(PropTypes.shape({
            inputType: PropTypes.string,
            inputId: PropTypes.string,
            inputName: PropTypes.string,
            inputLabel: PropTypes.string,
            required: PropTypes.bool
        })),
        textareaTag: PropTypes.arrayOf(PropTypes.shape({
            textareaId: PropTypes.string,
            textareaName: PropTypes.string,
            textareaLabel: PropTypes.string,
            required: PropTypes.bool
        }))
    }),
    action: PropTypes.string,
    method: PropTypes.string,
    formTitle: PropTypes.string,
    userFormCardStyle: PropTypes.string,
    userTitleStyle: PropTypes.string,
    userFormStyle: PropTypes.string,
    userInputFieldStyle: PropTypes.string,
};