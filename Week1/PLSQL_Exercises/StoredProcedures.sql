//Scenario 1: Monthly Interest


CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE Accounts
    SET balance = balance + (balance * 0.01)
    WHERE account_type = 'SAVINGS';
    
    COMMIT;
END;



//Scenario 2: Employee Bonus


CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(p_dept_id IN NUMBER, p_bonus_percent IN NUMBER) IS
BEGIN
    UPDATE Employees
    SET salary = salary + (salary * (p_bonus_percent / 100))
    WHERE department_id = p_dept_id;
    
    COMMIT;
END;




//Scenario 3: Transfer Funds


SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE TransferFunds(p_from_account IN NUMBER, p_to_account IN NUMBER, p_amount IN NUMBER) IS
    v_current_balance NUMBER;
BEGIN
    SELECT balance INTO v_current_balance
    FROM Accounts
    WHERE account_id = p_from_account;

    IF v_current_balance >= p_amount THEN
        UPDATE Accounts
        SET balance = balance - p_amount
        WHERE account_id = p_from_account;

        UPDATE Accounts
        SET balance = balance + p_amount
        WHERE account_id = p_to_account;

        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Transfer successful.');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Error: Not enough money in the account.');
    END IF;
END;

