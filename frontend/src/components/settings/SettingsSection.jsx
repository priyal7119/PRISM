// src/components/settings/SettingsSection.jsx

function SettingsSection({ title, fields, values = {}, onChange }) {
    return (
        <section className="settings-section">
            <h2>{title}</h2>
            <div className="settings-fields">
                {fields.map((field) => {
                    const fieldValue = values[field.name];
                    const type = field.type || "text";

                    return (
                        <div key={field.name} className="settings-field">
                            <label htmlFor={field.name}>{field.label}</label>

                            {type === "checkbox" ? (
                                <input
                                    id={field.name}
                                    type="checkbox"
                                    checked={Boolean(fieldValue)}
                                    onChange={(event) =>
                                        onChange(field.name, event.target.checked)
                                    }
                                />
                            ) : (
                                <input
                                    id={field.name}
                                    type={type}
                                    value={fieldValue ?? ""}
                                    onChange={(event) =>
                                        onChange(field.name, event.target.value)
                                    }
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default SettingsSection;
