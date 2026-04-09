SELECT c.cliente AS "Nome do Cliente", COALESCE(SUM(p.valor), 0) AS "Total Gasto",
    MAX(p.data_pedido) AS "Data da Última Compra"  
FROM d_clientes c
LEFT JOIN d_pedidos p ON c.id_cliente = p.id_cliente AND p.status = 'Concluida'      
GROUP BY c.cliente;

-- SQL feito no postgreSQL
-- Relatório de Performance por Cliente
-- Retornando Nome do Cliente, o Total Gasto e a Data da Última Compra.
-- Somando apenas os pedidos concluídos
-- Uso do LEFT JOIN