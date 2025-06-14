import { client } from "@/lib/xior";
import useSWR from 'swr'

export const useUsers = () => {
    const fetcher = (url: string) => client.get(url).then(res => res.data);
    const { data, error, isLoading, mutate } = useSWR<IUser[]>(
        '/users',
        fetcher,
    )

    return {
        users: data,
        isLoading,
        error,
        mutate,
    }
}

export const useUserDetails = (id: number) => {
    const fetcher = (url: string) => client.get(url).then(res => res.data);
    const { data, error, isLoading, mutate } = useSWR<IUser>(
        `/users/${id}`,
        fetcher,
    )

    return {
        user: data,
        isLoading,
        error,
        mutate,
    }
}