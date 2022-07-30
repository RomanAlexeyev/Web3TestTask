import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  useRecordContext,
} from "react-admin";

import dateFormatter from "./helpers/dateFormatter.ts";

const DateFieldForTimestamp = (props) => {
  const record = useRecordContext();
  if (!record) return null;
  return <span>{dateFormatter(record.date[props.source])}</span>;
};

const PromosList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="promo" sortable={false} />
        <TextField source="use_count" />
        <DateFieldForTimestamp source="start" sortable={false} />
        <DateFieldForTimestamp source="end" sortable={false} />
        <TextField source="creator[0].id" label="Creator ID" sortable={false} />
        <TextField
          source="creator[0].username"
          label="Creator username"
          sortable={false}
        />
        <TextField
          source="creator[0].password"
          label="Creator password"
          sortable={false}
        />
        <DeleteButton basepath="/promos" />
      </Datagrid>
    </List>
  );
};

export default PromosList;
