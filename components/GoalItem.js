import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {

  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 10,
    backgroundColor: 'purple',
    padding: 8,
    margin: 8,
  },
  goalText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
