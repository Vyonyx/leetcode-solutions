function dailyTemperatures(temperatures: number[]): number[] {
    const answers = Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        let next: number = i + 1;

        while (
            temperatures[next] <= temperatures[i]
        ) {
            next++;
        }

        if (!temperatures[next]) continue;

        const daysTillNextHighestTemp = next - i;
        answers[i] = daysTillNextHighestTemp;
    }

    return answers;
};
