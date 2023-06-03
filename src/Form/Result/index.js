import React from "react";

export const Result = ({ result }) => (
    <p className="form__paragraph">
        Kwota po przeliczeniu: <span>
            {!!result && (
                <>
                    {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
                    <strong>
                        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                    </strong>
                </>
            )}
        </span>
    </p>
);
