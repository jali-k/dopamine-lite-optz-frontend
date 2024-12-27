import { Box, Card } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { classesService, classesService_dev } from "@/services/classes";
import { useEffect, useState } from "react";
import { Class } from "@/types/class.types";

const getClases = classesService_dev.getClasses;

// const dummyClasses = [
//   { id: 1, title: '2026 Revision' },
//   { id: 2, title: '2027 Revision' },
// ];

const ClassesPage = () => {
  const [classes, setClasses] = useState<Class[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getClases().then((data) => setClasses(data));
  }, []);

  const onClickHandler = (cls: Class) => {
    console.log(`The class ${cls.name} was clicked`);
    navigate(`/classes/${cls.id}/lessons`);
  }
  return (
    <Box>
      {classes.map((cls) => <Card.Root onClick={()=> {onClickHandler(cls)}} key={cls.id}>{cls.name}</Card.Root>)}
    </Box>
  );
}

export default ClassesPage;