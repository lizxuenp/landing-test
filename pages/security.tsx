import { useRouter } from 'next/router';

export default function Security() {
    const router = useRouter();

    return (
        <div onClick={() => router.back()}>
        https://www.bleepingcomputer.com/news/security/npm-supply-chain-attack-impacts-hundreds-of-websites-and-apps/

        </div>
    );
}