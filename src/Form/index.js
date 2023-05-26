import "./style.css";

const Form = () => (
    <form className="form ">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kalkulator walut</legend>
            <p>
                <label>
                    <span className="form__labelText">Kwota w PLN*:</span>
                    <input className="form__field" name="amountInPln" type="number" min="1" step="any"
                        required />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">Przelicz na:</span>
                    <select className="form__field" name="foreignCurrency">
                        <option value="EUR">Euro</option>
                        <option value="USD">Dolar amerykański</option>
                        <option value="GBP">Funt brytyjski</option>
                    </select>
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">Kwota po przeliczeniu:</span>
                    <input className="form__field" name="amountAfterConvert" type="number" disabled />
                </label>
            </p>
        </fieldset>
        <p>*Pole obowiązkowe</p>
        <div>
            <button className="form__button">Przelicz</button>
        </div>
        <div>
            <button className="form__button" type="reset">Wyczyść</button>
        </div>
        <p className="form__paragraph">Kalkulator przelicza wartość dowolnie wybranych walut. Najnowsza tabela kursów
            średnich NBP pochodzi z
            dnia
            2023-01-09.
        </p>

    </form>
);

export default Form;