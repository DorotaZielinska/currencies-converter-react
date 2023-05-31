
export const Result = ({result, setResult}) => (
        <p>
            <label>
                <span
                    className="form__labelText">Kwota po przeliczeniu:</span>
                <input
                    value={result}
                    onChange={({ target }) => setResult(target.value)}
                    className="form__field"
                    name="amountAfterConvert"
                    type="number"
                    disabled />
            </label>
        </p>
    )
