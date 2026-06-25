public class Main {
    public static void main(String[] args) {
        double currentRevenue = 1000.0;
        double pastAverageGrowthRate = 0.05;
        int yearsToPredict = 3;

        System.out.println("Current Revenue: " + currentRevenue);
        System.out.println("Average Growth Rate: 5%");
        System.out.println("Predicting for " + yearsToPredict + " years...\n");

        double futureRevenue = FinancialForecasting.predictFutureValue(currentRevenue, pastAverageGrowthRate, yearsToPredict);

        System.out.println("Predicted Future Revenue: " + futureRevenue);
    }
}