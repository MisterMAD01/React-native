import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const PRIMARY_COLOR = "#EE4D2D";

type DetailRowProps = {
  label: string;
  value: string;
};

const ensureString = (
  param: string | string[] | undefined
): string | undefined => {
  if (typeof param === "string") {
    return param;
  }
  if (Array.isArray(param) && param.length > 0) {
    return param[0];
  }
  return undefined;
};

export default function ContactPage() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const fullName = ensureString(params.name) || "Samit Khampradit";
  const email = ensureString(params.email) || "samit@itgenius.com";
  const tel = ensureString(params.tel) || "081-234-5678";
  const company =
    ensureString(params.company) || "ITGenius Engineering Co., Ltd.";

  const DetailRow = ({ label, value }: DetailRowProps) => (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}:</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Contact Details</Text>

        <View style={styles.card}>
          <DetailRow label="Full Name" value={fullName} />
          <DetailRow label="Email" value={email} />
          <DetailRow label="Tel" value={tel} />
          <DetailRow label="Company" value={company} />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>← GO BACK</Text>
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
    backgroundColor: "#f5f5f5",
  },
  main: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
    maxWidth: 960,
    alignSelf: "center",
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
    color: PRIMARY_COLOR,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderLeftWidth: 5,
    borderLeftColor: PRIMARY_COLOR, // สีส้มเน้น
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    flex: 1,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#000",
    flex: 2,
    textAlign: "right",
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 40,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
