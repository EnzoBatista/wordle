import { useTheme } from "@mui/system";

const Home = () => {
  const theme = useTheme();

  return (
    <>
    <p style={{background: theme.palette.yellow}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae quasi fugiat nulla dolor autem mollitia soluta, beatae a recusandae voluptatum eum dicta tenetur! Accusamus, enim doloremque laboriosam culpa dolore ducimus.</p>
    </>
  );
};

export default Home;
