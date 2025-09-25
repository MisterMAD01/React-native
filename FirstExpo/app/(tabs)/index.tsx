import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

export default function Page() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Expo App</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>

        <Link href="/about" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>About Page</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/contact" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Click to Contact</Text>
          </TouchableOpacity>
        </Link>
        <Button
          title="Go to user ID: 456"
          onPress={() => router.push("/user/456")}
        />
        <Button
          title="Go to Profile"
          onPress={() => router.push("/user/profile")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#28a745",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 50,
    width: "100%",
    maxWidth: 960,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
