import { TouchableOpacity } from "react-native-gesture-handler";
import { SimpleLineIcons } from "@expo/vector-icons";

const BurgerMenu = () => {
  return (
    <TouchableOpacity>
      <SimpleLineIcons name="menu" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default BurgerMenu;
