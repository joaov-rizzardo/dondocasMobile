import { Text, View, StyleSheet, Button, ScrollView} from "react-native"

export default () => {
    return (
        <ScrollView style={styles.container} horizontal={true}>
            <Button title="Clique1" />
            <Button title="Clique2" />
            <Button title="Clique3" />
            <Button title="Clique4" />
            <Button title="Clique5" />
            <Button title="Clique6" />
            <Button title="Clique7" />
            <Button title="Clique8" />
            <Button title="Clique9" />

            <Button title="Clique" />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})