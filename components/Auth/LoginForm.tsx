import { View, Text, TextInput, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { user, userDetails } from "@/utils/userDB";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";

export default function LoginForm() {
  const [error, setError] = useState("");
  const { login } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    const { username, password } = data;

    if (username !== user.username || password !== user.password) {
      console.log("incorrect");
      setError("The user or password is incorrect");
    } else {
      login(userDetails);
      console.log("correct");
      setError("true");
    }
  };

  return (
    <View>
      <Text className="text-center text-3xl font-bold mt-12 mb-4">Log In</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            className="h-12 m-3 border p-3 rounded-xl"
            autoCapitalize="true"
          />
        )}
        name="username"
      />
      {errors.username && <Text className="mx-3 text-red-400 font-medium">This is required</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            className="h-12 m-3 border p-3 rounded-xl"
            secureTextEntry={true}
            autoCapitalize="none"
          />
        )}
        name="password"
      />
      {errors.password && <Text className="mx-3 text-red-400 font-medium">This is required</Text>}
      <Pressable onPress={handleSubmit(onSubmit)} className="bg-slate-400 p-3 rounded-xl m-3 h-12">
        <Text className="text-center">Submit</Text>
      </Pressable>

      {error && <Text>{error}</Text>}
    </View>
  );
}
