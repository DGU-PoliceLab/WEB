const num_to_array = (n, s = 1) => {
    let result = [];
    for (let i = s; i <= n + s; i++) {
        result.push(i);
    }
    return result;
};

export { num_to_array };
