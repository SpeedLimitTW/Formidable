export default function() {
    return new Promise(resolve => setTimeout(resolve, Math.random() * (2000 - 600) + 600));
}