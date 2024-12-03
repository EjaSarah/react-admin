import {
  EditButton,
  ImageField,
  List,
  NumberField,
  ReferenceField,
  TextField,
  useRecordContext,
  TopToolbar,
  SelectColumnsButton,
  ExportButton,
  DatagridConfigurable,
} from "react-admin";
import { PosterFilterSidebar } from "./FilterList";

const PosterListActions = () => {
  return (
    <TopToolbar>
      <SelectColumnsButton />
      <ExportButton />
    </TopToolbar>
  );
};

const UrlField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <a href={record[source]} target="_blank">
      view
    </a>
  );
};

export const PosterList = () => (
  <List aside={<PosterFilterSidebar />} actions={<PosterListActions />}>
    <DatagridConfigurable>
      <TextField source="id" />
      <ReferenceField source="category_id" reference="categories" />
      <TextField source="name" />
      <TextField source="title" />
      <NumberField source="width" label="width(cm)" />
      <NumberField source="height" label="height(cm)" />
      <NumberField source="price" />
      <ImageField
        source="thumbnail"
        title="title"
        sx={{ "& img": { maxWidth: 80, maxHeight: 80, objectFit: "contain" } }}
      />
      <UrlField source="image" />
      <TextField source="description" />
      <NumberField source="stock" />
      <NumberField source="sales" sx={{ fontWeight: "bold" }} />
      <EditButton />
    </DatagridConfigurable>
  </List>
);
