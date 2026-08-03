// src/components/settings/SettingsSection.jsx

function SettingsSection({
  title,
  description,
  fields,
  values,
  section,
  onChange,
}) {
  return (
    <div className="settings-section">
      <div className="settings-section-header">
        <h3 className="settings-section-title">{title}</h3>

        {description && (
          <p className="settings-section-description">
            {description}
          </p>
        )}
      </div>

      <div className="settings-fields">
        {fields.map((field) => (
          <div
            key={field.name}
            className="settings-form-group"
          >
            <label>{field.label}</label>

            {field.description && (
              <p>{field.description}</p>
            )}

            {field.type === "select" ? (
              <select
                className="form-select"
                value={values[field.name] ?? ""}
                onChange={(e) =>
                  onChange(
                    section,
                    field.name,
                    e.target.value
                  )
                }
              >
                {field.options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === "checkbox" ? (
              <label className="switch-label">
                <input
                  type="checkbox"
                  checked={Boolean(values[field.name])}
                  onChange={(e) =>
                    onChange(
                      section,
                      field.name,
                      e.target.checked
                    )
                  }
                />

                <span className="switch-text">
                  {field.switchLabel || "Enabled"}
                </span>
              </label>
            ) : (
              <input
                className="form-input"
                type={field.type || "text"}
                value={values[field.name] ?? ""}
                onChange={(e) =>
                  onChange(
                    section,
                    field.name,
                    field.type === "number"
                      ? Number(e.target.value)
                      : e.target.value
                  )
                }
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SettingsSection;