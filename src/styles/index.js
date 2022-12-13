import { StyleSheet } from 'react-native';

export const Colors = {
	darkGreen: "#004761",
    lightGreen: "#8cd6bd",
};

export const Styles = {
	Main: StyleSheet.create({
		Background: {
            backgroundColor: Colors.darkGreen,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }
    })
}
