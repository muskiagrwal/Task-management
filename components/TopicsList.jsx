import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-pink-300 my-3 flex justify-between gap-5 items-start bg-gradient-conic rounded-lg shadow-sm hover:shadow-yellow-500/50 hover:shadow-lg transition-all"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
            <div className="mt-2">
              <span className="text-sm text-gray-500">Due: </span>
              <span>{new Date(t.dueDate).toLocaleDateString()}</span>
            </div>
            <div className="mt-1">
              <span className="text-sm text-gray-500">Status: </span>
              <span className={`font-bold ${t.completed ? 'text-green-500' : 'text-red-500'}`}>
                {t.completed ? "Completed" : "Pending"}
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
