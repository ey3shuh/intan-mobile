import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const Collections = [
  { name: 'Signature', product: 99 },
  { name: 'Basic', product: 101 },
  { name: 'Premium', product: 2 },
  { name: 'Peranakan Foam Sejadah', product: 222 },
  { name: 'New Arrival', product: 10 },
  { name: 'Sejadah', product: 23 },
  { name: 'Inner', product: 4 },
];

interface CollectionFilterProps {
  handleSelectionChange: (selectedItems: any[]) => void;
}

export default function CollectionFilter({ handleSelectionChange }: CollectionFilterProps) {
  const [selectedCollections, setSelectedCollections] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedCollections>) => {
    const {
      target: { value },
    } = event;
    const selectedCollectionNames = typeof value === 'string' ? value.split(',') : value;
    setSelectedCollections(selectedCollectionNames);

    // Pass the selected collections up to the parent
    const selectedCollectionDetails = selectedCollectionNames.map(collectionName =>
      Collections.find(collection => collection.name === collectionName)
    );
    handleSelectionChange(selectedCollectionDetails as any[]);
  };

  return (
    <FormControl sx={{ my: 3 }} className="w-full">
      <InputLabel id="demo-multiple-checkbox-label">Collections</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={selectedCollections}
        onChange={handleChange}
        input={<OutlinedInput label="Collections" />}
        renderValue={(selected) => selected.join(', ')}
      >
        {Collections.map((collectionItem) => (
          <MenuItem key={collectionItem.name} value={collectionItem.name}>
            <Checkbox checked={selectedCollections.includes(collectionItem.name)} />
            <ListItemText primary={collectionItem.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
