import { createSchemas } from '@/utils/signSchemas';
import { useEffect } from 'react';
// import { createSchemas } from '../utils/signSchemas';

const CreateSchemas = () => {
  useEffect(() => {
    const run = async () => {
      try {
        const schemaIds = await createSchemas();
        console.log('Schema IDs:', schemaIds);
        alert(`Schema IDs: ${JSON.stringify(schemaIds)}`);
      } catch (error) {
        console.error('Error creating schemas:', error);
        alert('Failed to create schemas. Check console for details.');
      }
    };

    run();
  }, []);

  return (
    <div>
      <h1>Creating Schemas...</h1>
    </div>
  );
};

export default CreateSchemas;