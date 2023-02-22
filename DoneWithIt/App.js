import WelcomeScreen from './components/WelcomeScreen';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  
  return (
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <WelcomeScreen/>
      </IconComponentProvider>
  );
}


