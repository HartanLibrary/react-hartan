import snippetStyle from "./Snippet.module.css"
import useCopy from "../../Hooks/Copy"
import PropTypes from "prop-types"


export default function Snippet({ snippetSymbol = "$", snippetSymbolState = true, snippetText = "npm i react-hartan", id, userSnippetStyle, userSnippetTextStyle }) {

    const [isCopied, handleCopyClick] = useCopy(snippetText);

    return (

        <div className={`${snippetStyle.snippet} ${userSnippetStyle}`} onClick={handleCopyClick} id={id}>
            <pre>
                <code>
                    <span className={`${snippetStyle.snippetText} ${userSnippetTextStyle}`}>{snippetSymbolState && snippetSymbol} {snippetText}</span>
                    <span>
                        {
                            isCopied ?
                                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 384 512"><path fill="#ffffff" d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
                                </svg>
                        }
                    </span>
                </code>
            </pre>
        </div>

    )
}

Snippet.propTypes = {
    snippetSymbol: PropTypes.node,
    snippetSymbolState: PropTypes.bool,
    snippetText: PropTypes.node,
    id: PropTypes.string,
    userSnippetStyle: PropTypes.string,
    userSnippetTextStyle: PropTypes.string
};