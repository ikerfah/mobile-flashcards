import { Alert } from "react-native";

export const createTwoButtonAlert = (
    title,
    message,
    onConfirmClicked
) =>
    Alert.alert(
        title,
        message,
        [
            {
                text: "Cancel",
                onPress: () => { },
                style: "cancel"
            },
            { text: "OK", onPress: () => onConfirmClicked() }
        ],
        { cancelable: false }
    );

export const createOkButtonAlert = (
    title,
    message,
    onOkClicked
) =>
    Alert.alert(
        title,
        message,
        [
            { text: "OK", onPress: () => onOkClicked ? onOkClicked() : {} }
        ],
        { cancelable: true }
    );


