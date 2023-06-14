import React from "react";
import { ResultWrapper } from "./styled";

export const Result = ({ result }) => (
    <ResultWrapper>
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
    </ResultWrapper>
);
