import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class BankAccountTest {

    private BankAccount account;

    @Before
    public void setUp() {
        account = new BankAccount();
    }

    @After
    public void tearDown() {
        account = null;
    }

    @Test
    public void testDeposit() {
        int depositAmount = 50;

        account.deposit(depositAmount);
        int currentBalance = account.getBalance();

        assertEquals(50, currentBalance);
    }

    @Test
    public void testWithdraw() {
        account.deposit(100);
        int withdrawAmount = 40;

        account.withdraw(withdrawAmount);
        int currentBalance = account.getBalance();

        assertEquals(60, currentBalance);
    }
}