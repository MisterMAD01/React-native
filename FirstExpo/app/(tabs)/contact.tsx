import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function ContactPage() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const fullName = params.name || "Samit";
  const email = params.email || "samit@email.com";
  const tel = params.tel || "0812345678";
  const company = params.company || "ITGenius";

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Contact Page</Text>

        <Text style={styles.detailText}>
          Name: <Text style={styles.detailValue}>{fullName}</Text>
        </Text>
        <Text style={styles.detailText}>
          Email: <Text style={styles.detailValue}>{email}</Text>
        </Text>
        <Text style={styles.detailText}>
          Tel: <Text style={styles.detailValue}>{tel}</Text>
        </Text>
        <Text style={styles.detailText}>
          Company: <Text style={styles.detailValue}>{company}</Text>
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>GO BACK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f0f0f0",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    maxWidth: 960,
    alignSelf: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  detailText: {
    fontSize: 18,
    marginBottom: 10,
  },
  detailValue: {
    fontWeight: "normal",
    color: "#333",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 30,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
