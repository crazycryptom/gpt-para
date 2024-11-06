import { useState } from "react";

export const useChats = () => {
  const [answer, setAnswer] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const handleQuery = (query: string) => {
    setIsLoading(true);
    setData([]);
    setAnswer((prevData: any) => [
      ...prevData,
      {
        role: "you",
        content: query,
      },
    ]);
    setQuery("");
    fetch(`http://44.192.60.96:8005/api/task/query-test?prompt=${query}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response: any) => {
        const latestData: any = [];
        // Check response status and handle data stream
        if (response.status === 200) {
          const reader = response.body.getReader();

          const readStream = async () => {
            reader.read().then(({ done, value }: any) => {
              // Check if the stream has ended
              if (done) {
                setAnswer((prevData: any) => [
                  ...prevData,
                  {
                    role: "system",
                    content: latestData,
                  },
                ]);
                setData([]);
                console.log("Stream ended");
                return;
              }

              // Process the received data
              const chunk = value;
              let result = "";
              for (const key in chunk) {
                result += String.fromCharCode(chunk[key]);
              }
              const cleanedInput = result.replace(/data:\s+/g, "");
              const contentElement = document.getElementById("content");
              if (contentElement !== null) {
                contentElement.innerHTML += "";
                latestData.push(cleanedInput);
                setData((prevData: any) => [...prevData, cleanedInput]);
              }
              readStream();
            });
          };

          readStream();
        } else {
          throw new Error("Failed to fetch data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    setIsLoading(false);
  };
  return { answer, data, query, setQuery, handleQuery, isLoading };
};
