interface ThrottlingProps<T> {
    buttonClicked: (arg: T) => void;
    delay?: number;
}
export default function useThrottling<T>({ buttonClicked, delay, }: ThrottlingProps<T>): (arg: T) => void;
export {};
//# sourceMappingURL=useThrottling.d.ts.map