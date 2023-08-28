import React, { type FC, useState } from 'react';

const EditableCell: FC<{ children: string; onChange: (n: number) => void }> = ({
  children,
  onChange,
}) => {
  const [value, setValue] = useState(children);

  return (
    <td>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onChange(parseFloat(value));
        }}
      >
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Apply</button>
      </form>
    </td>
  );
};

export default EditableCell;
